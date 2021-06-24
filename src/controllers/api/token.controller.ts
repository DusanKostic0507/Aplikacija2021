import { Body, HttpException, HttpStatus, Req, UseGuards } from "@nestjs/common";
import { Controller, Post } from "@nestjs/common";
import { AllowToRoles } from "src/misc/allow.to.roles.descriptor";
import { RoleCheckedGuard } from "src/misc/role.checker.guard";
import { AdministratorService } from "src/services/administrator/administrator.service";
import { UserService } from "src/services/user/user.service";
import { Request } from 'express';
import { UserRefreshTokenDto } from "src/dtos/auth/user.refresh.token.dto";
import { ApiResponse } from "src/misc/api.response.class";
import * as jwt from 'jsonwebtoken';
import { JwtRefreshDataDto } from "src/dtos/auth/jwt,refresh.dto";
import { jwtSecret } from "config/jwt.secret";
import { JwtDataDto } from "src/dtos/auth/jwt.data.dto";
import { LoginInfoDto } from "src/dtos/auth/login.info.dto";

@Controller('token')
export class TokenController {
    constructor(
        private administratorService: AdministratorService,
        private userService: UserService,
    ) { }

    

    private getDatePlus(numberOfSeconds: number): number {
        return new Date().getTime() / 1000 + numberOfSeconds;
    }
    private getIsoDate(timestamp: number): string {
        const date = new Date();
        date.setTime(timestamp * 1000);
        return date.toISOString();
    }
}