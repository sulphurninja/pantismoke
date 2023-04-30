import { MongoClient } from 'mongodb';
import fs from 'fs';
import path from 'path';

export default async function handler(req, res) {
  // Generate the list of draw times
  const startHour = 1;
  const startMinute = 0;
  const interval = 2;
  const numDraws = 720;

  const drawTimes = [];
  for (let hour = startHour; hour <= 12; hour++) {
    for (let minute = startMinute; minute < 60; minute += interval) {
      drawTimes.push(`${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')} AM`);
      drawTimes.push(`${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')} PM`);
    }
  }

  // Generate the documents
  const docs = [];
  for (let i = 0; i < numDraws; i++) {
    const doc = {
      couponNum: Math.floor(Math.random() *10) ,
      drawTime: drawTimes[i]
    };
    docs.push(doc);
  }

  // Connect to the database
  const client = await MongoClient.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  const db = client.db('test');

  try {
    // Insert the documents into the fetchResults collection
    const collection = db.collection('fetchResults');
    const result = await collection.insertMany(docs);
    console.log(`Inserted ${result.insertedCount} documents into the fetchResults collection`);
    res.status(200).json({ message: `Inserted ${result.insertedCount} documents into the fetchResults collection` });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error inserting documents into the fetchResults collection' });
  } finally {
    // Close the connection after use
    client.close();
  }
}
