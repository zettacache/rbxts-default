import {Networking} from '@flamework/networking';

type ServerEvents = {};

type ServerFunctions = {};

type ClientEvents = {};

type ClientFunctions = {};

export const GlobalEvents = Networking.createEvent<ServerEvents, ClientEvents>();
export const GlobalFunctions = Networking.createFunction<ServerFunctions, ClientFunctions>();
