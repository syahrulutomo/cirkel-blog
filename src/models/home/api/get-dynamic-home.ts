import { http } from "@/domains/common/http/axios";
import { HomeDataType } from "@/app/api/home/types";

export const getDynamicHome = () => {
  return http.post<HomeDataType>(
    "/api/home",
    {}
  );
};
