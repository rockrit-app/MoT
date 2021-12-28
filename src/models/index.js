// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Session, Broadcaster, Championship, Event, Country, SessionBroadcaster } = initSchema(schema);

export {
  Session,
  Broadcaster,
  Championship,
  Event,
  Country,
  SessionBroadcaster
};