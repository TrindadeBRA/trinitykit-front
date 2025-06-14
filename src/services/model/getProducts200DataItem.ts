/**
 * Generated by orval v7.8.0 🍺
 * Do not edit manually.
 * TrinityKitWP API
 * API para criar posts e fazer upload de imagens no WordPress
 * OpenAPI spec version: 1.0.0
 */
import type { GetProducts200DataItemSegmentsItem } from './getProducts200DataItemSegmentsItem';
import type { GetProducts200DataItemProductLinesItem } from './getProducts200DataItemProductLinesItem';

export type GetProducts200DataItem = {
  /** ID do produto */
  id?: number;
  /** Título do produto */
  title?: string;
  /** Número CAS do produto */
  cas_number?: string;
  segments?: GetProducts200DataItemSegmentsItem[];
  product_lines?: GetProducts200DataItemProductLinesItem[];
};
