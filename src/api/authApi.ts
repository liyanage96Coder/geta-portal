import api from "./axios";
import type { LoginRequest, LoginResponse } from "../types/auth";

export const login = async (
    data: LoginRequest
): Promise<LoginResponse> => {
    const response = await api.post<LoginResponse>("/api/login", data);

    return response.data;
};