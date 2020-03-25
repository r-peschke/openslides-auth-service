import Client from '../core/models/client';
import { Service } from '../core/modules/decorators';

@Service('clientService')
export default class ClientService {
    // private static instance: ClientService;

    private clients: Client[];

    // private constructor() {}

    // public static getInstance(): ClientService {
    //     if (!this.instance) {
    //         this.instance = new ClientService();
    //     }
    //     return this.instance;
    // }

    public addClient(client: Client): boolean {
        if (!this.clients.find(entry => entry.clientId === client.clientId)) {
            this.clients.push(client);
            return true;
        }
        return false;
    }

    /**
     * @returns The found client or undefined if there is no client with the given id.
     */
    public getClientById(id: string): Client | undefined {
        return this.clients.find(client => client.clientId === id);
    }

    public hello(): void {
        console.log('Hello world from ClientService');
    }
}
