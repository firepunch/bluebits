import { Shipper } from "./Shipper";
import { Compartment } from "./Compartment";

export interface Delivery {
  delivery_id: number;
  delivery_location: string;
  delivery_address: string;
  delivered_at: string; // Date;
  shipper: Shipper,
  compartment: Compartment
}