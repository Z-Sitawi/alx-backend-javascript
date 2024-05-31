#!/usr/bin/node
import ClassRoom from './0-classroom';

export default function initializeRooms() {
  room = new ClassRoom(19);
  room1 = new ClassRoom(20);
  room2 = new ClassRoom(34);

  return [room, room1, room2];
}
