import restConnector from "@/lib/axios";
import { AxiosInstance } from "axios";

class AuthGateway {
  private restConnector: AxiosInstance;
  constructor(restConnector: AxiosInstance) {
    this.restConnector = restConnector;
  }

  async nonce(): Promise<string> {
    const { data } = await this.restConnector.get("/nonce");

    return data;
  }

  async login(signedMessage: string, address: string, message: string) {
    const { data } = await this.restConnector.post("/login", {
      message,
      address,
      signedMessage,
    });

    return data;
  }
}

export default new AuthGateway(restConnector);
