/**
 * Generated by orval v7.8.0 🍺
 * Do not edit manually.
 * TrinityKitWP API
 * API para criar posts e fazer upload de imagens no WordPress
 * OpenAPI spec version: 1.0.0
 */
import type { GetProducts200DataItem } from './getProducts200DataItem';

export type GetProducts200 = {
  success?: boolean;
  data?: GetProducts200DataItem[];
  /** Número total de produtos retornados */
  items?: number;
};
