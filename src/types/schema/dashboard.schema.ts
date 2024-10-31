import { DateString, UniqueId } from "@/types/declare";

export interface CreateDashboardItemRequest {
  title: string;
  context: string;
}

export type GetDashboardListResponse = DashboardItem[];

export interface DashboardItem {
  id: UniqueId;
  title: string;
  context: string;
  created_at: DateString;
  updated_at: DateString;
}
