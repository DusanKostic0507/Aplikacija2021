import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Feature } from "./feature.entity";
import { Article } from "./article.entity";

@Index("uq_article_feature_article_id_feature_id", ["articleId", "featureId"], {
  unique: true,
})
@Index("fk+article_feature_feature_id", ["featureId"], {})
@Entity("article_feature")
export class ArticleFeature {
  @PrimaryGeneratedColumn({
    type: "int",
    name: "article_feature_id",
    unsigned: true,
  })
  articleFeatureId: number;

  @Column({ type: "int", name: "article_id", unsigned: true })
  articleId: number;

  @Column({ type: "int", name: "feature_id", unsigned: true })
  featureId: number;

  @Column({ type: "varchar", length: 255 })
  value: string;

  @ManyToOne(() => Feature, (feature) => feature.articleFeatures, {
    onDelete: "NO ACTION",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "feature_id", referencedColumnName: "featureId" }])
  feature: Feature;

  @ManyToOne(() => Article, (article) => article.articleFeatures, {
    onDelete: "NO ACTION",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "article_id", referencedColumnName: "articleId" }])
  article: Article;
}