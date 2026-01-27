import { Event } from "../models/eventModules";

/**
 * In-memory event data (demo purpose)
 */
let events: Event[] = [
  {
    id: 1,
    name: "Tech Conference 2025",
    date: "2025-03-15T09:00:00.000Z",
    capacity: 200,
    registrationCount: 185,
  },
  {
    id: 2,
    name: "Startup Pitch Night",
    date: "2025-02-20T18:00:00.000Z",
    capacity: 50,
    registrationCount: 12,
  },
  {
    id: 3,
    name: "Web Dev Workshop",
    date: "2025-02-10T10:00:00.000Z",
    capacity: 30,
    registrationCount: 30,
  },
];

/**
 * Get all events
 */
export const getAllEvents = (): Event[] => {
  return structuredClone(events);
};

/**
 * Get event by ID
 */
export const getEventById = (id: number): Event | undefined => {
  const event = events.find((e) => e.id === id);
  return event ? structuredClone(event) : undefined;
};

/**
 * Create a new event
 */
export const createEvent = (
  name: string,
  date: string,
  capacity: number
): Event => {
  const newEvent: Event = {
    id: events.length + 1,
    name,
    date,
    capacity,
    registrationCount: 0,
  };

  events.push(newEvent);
  return structuredClone(newEvent);
};

/**
 * Update an existing event
 */
export const updateEvent = (
  id: number,
  updates: Pick<Event, "name" | "date" | "capacity">
): Event | undefined => {
  const index = events.findIndex((e) => e.id === id);

  if (index === -1) {
    return undefined;
  }

  events[index] = {
    ...events[index],
    ...updates,
  };

  return structuredClone(events[index]);
};

/**
 * Delete an event
 */
export const deleteEvent = (id: number): boolean => {
  const initialLength = events.length;
  events = events.filter((e) => e.id !== id);
  return events.length < initialLength;
};

/**
 * Calculate popularity details for an event
 */
export const calculatePopularity = (event: Event) => {
  const spotsRemaining = event.capacity - event.registrationCount;

  if (event.capacity === 0) {
    return {
      ...event,
      spotsRemaining,
      popularityScore: 0,
      popularityTier: "New",
    };
  }

  const rawScore =
    (event.registrationCount / event.capacity) * 100;

  const popularityScore = Number(rawScore.toFixed(1));

  let popularityTier: string;

  if (popularityScore >= 90) {
    popularityTier = "Hot";
  } else if (popularityScore >= 70) {
    popularityTier = "Popular";
  } else if (popularityScore >= 50) {
    popularityTier = "Moderate";
  } else if (popularityScore >= 25) {
    popularityTier = "Building";
  } else {
    popularityTier = "New";
  }

  return {
    ...event,
    spotsRemaining,
    popularityScore,
    popularityTier,
  };
};
