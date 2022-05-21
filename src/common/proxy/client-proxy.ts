import { Injectable, Logger } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { ClientProxy, ClientProxyFactory, Transport } from "@nestjs/microservices";
import { RabbitMQ } from "../constants";

@Injectable()
export class ClientProxySuperFlights {
    constructor(private readonly config: ConfigService) { }
    private readonly logger = new Logger(ClientProxySuperFlights.name);

    clientProxyUsers(): ClientProxy {
        this.logger.log("ClientProxyUsers");
        this.logger.debug(this.config.get('AMQP_URL'));
        return ClientProxyFactory.create({
            transport: Transport.RMQ,
            options: {
                urls: this.config.get('AMQP_URL'),
                queue: RabbitMQ.UserQueue,
            },
        })
    }

    clientProxyPassengers(): ClientProxy {
        return ClientProxyFactory.create({
            transport: Transport.RMQ,
            options: {
                urls: this.config.get('AMQP_URL'),
                queue: RabbitMQ.PassengerQueue,
            },
        })
    }

    clientProxyFlights(): ClientProxy {
        return ClientProxyFactory.create({
            transport: Transport.RMQ,
            options: {
                urls: this.config.get('AMQP_URL'),
                queue: RabbitMQ.FlightsQueue,
            },
        })
    }
}