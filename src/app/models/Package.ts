import { Delivery } from "./Delivery";

export interface Package {
  package_id: number;
  package_status: string; // PackageStatus;
  delivery_details: Delivery;
}

export enum PackageStatus {
  Success = "success",
  Pending = "pending",
  Failed = "failed",
  Cancelled = "cancelled",
}