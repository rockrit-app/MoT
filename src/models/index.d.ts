import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type SessionMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type BroadcasterMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ChampionshipMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type EventMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type CountryMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type SessionBroadcasterMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Session {
  readonly id: string;
  readonly name?: string;
  readonly date?: string;
  readonly time?: string;
  readonly eventID?: string;
  readonly Broadcasters?: (SessionBroadcaster | null)[];
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Session, SessionMetaData>);
  static copyOf(source: Session, mutator: (draft: MutableModel<Session, SessionMetaData>) => MutableModel<Session, SessionMetaData> | void): Session;
}

export declare class Broadcaster {
  readonly id: string;
  readonly name?: string;
  readonly countryID?: string;
  readonly sessions?: (SessionBroadcaster | null)[];
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Broadcaster, BroadcasterMetaData>);
  static copyOf(source: Broadcaster, mutator: (draft: MutableModel<Broadcaster, BroadcasterMetaData>) => MutableModel<Broadcaster, BroadcasterMetaData> | void): Broadcaster;
}

export declare class Championship {
  readonly id: string;
  readonly name?: string;
  readonly Session?: (Event | null)[];
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Championship, ChampionshipMetaData>);
  static copyOf(source: Championship, mutator: (draft: MutableModel<Championship, ChampionshipMetaData>) => MutableModel<Championship, ChampionshipMetaData> | void): Championship;
}

export declare class Event {
  readonly id: string;
  readonly name?: string;
  readonly championshipID?: string;
  readonly Sessions?: (Session | null)[];
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Event, EventMetaData>);
  static copyOf(source: Event, mutator: (draft: MutableModel<Event, EventMetaData>) => MutableModel<Event, EventMetaData> | void): Event;
}

export declare class Country {
  readonly id: string;
  readonly name?: string;
  readonly Broadcasters?: (Broadcaster | null)[];
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Country, CountryMetaData>);
  static copyOf(source: Country, mutator: (draft: MutableModel<Country, CountryMetaData>) => MutableModel<Country, CountryMetaData> | void): Country;
}

export declare class SessionBroadcaster {
  readonly id: string;
  readonly session: Session;
  readonly broadcaster: Broadcaster;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<SessionBroadcaster, SessionBroadcasterMetaData>);
  static copyOf(source: SessionBroadcaster, mutator: (draft: MutableModel<SessionBroadcaster, SessionBroadcasterMetaData>) => MutableModel<SessionBroadcaster, SessionBroadcasterMetaData> | void): SessionBroadcaster;
}