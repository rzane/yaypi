// tslint:disable
/**
 * Good Bad Reviews
 * Good Bad Reviews
 *
 * OpenAPI spec version: 0.0.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists } from "../runtime";
/**
 *
 * @export
 * @interface ReviewParams
 */
export interface ReviewParams {
  /**
   *
   * @type {string}
   * @memberof ReviewParams
   */
  productName: string;
}

export function ReviewParamsFromJSON(json: any): ReviewParams {
  return {
    productName: json["productName"]
  };
}

export function ReviewParamsToJSON(value?: ReviewParams): any {
  if (value === undefined) {
    return undefined;
  }
  return {
    productName: value.productName
  };
}
