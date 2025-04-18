import { neon } from "@neondatabase/serverless";
import "dotenv/config";
import { drizzle } from "drizzle-orm/neon-http";

import * as schema from "../db/schema";

const sql = neon(process.env.DATABASE_URL!);

const db = drizzle(sql, { schema });

const main = async () => {
	try {
		console.log("Seeding database...");
		await db.delete(schema.courses);
		await db.delete(schema.userProgress);
		await db.delete(schema.units);
		await db.delete(schema.lessons);
		await db.delete(schema.challenges);
		await db.delete(schema.challengeOptions);
		await db.delete(schema.challengeProgress);

		await db.insert(schema.courses).values([
			{ id: 1, title: "Serbian", imageSrc: "/RS.svg" },
			{ id: 2, title: "Georgian", imageSrc: "/GE.svg" },
			{ id: 3, title: "Polish", imageSrc: "/PL.svg" },
			{ id: 4, title: "German", imageSrc: "/DE.svg" },
		]);

		await db.insert(schema.units).values([
			{
				id: 1,
				title: "Unit 1",
				description: "Learn the basic of Serbian",
				courseId: 1,
				order: 1,
			},
		]);

		await db.insert(schema.lessons).values([
			{
				id: 1,
				unitId: 1,
				order: 1,
				title: "Nouns",
			},
		]);

		await db.insert(schema.challenges).values([
			{
				id: 1,
				lessonId: 1,
				type: "SELECT",
				order: 1,
				question:
					"Which one is the correct translation of 'the man' in Serbian ?",
			},
		]);

		await db.insert(schema.challengeOptions).values([
			{
				id: 1,
				challengeId: 1,
				imageSrc: "/man.svg",
				correct: true,
				text: "čovek",
				audioSrc: "/rs_man.mp3",
			},
			{
				id: 2,
				challengeId: 1,
				imageSrc: "/woman.svg",
				correct: true,
				text: "žena",
				audioSrc: "/rs_woman.mp3",
			},
			{
				id: 3,
				challengeId: 1,
				imageSrc: "/dog.svg",
				correct: true,
				text: "pas",
				audioSrc: "/rs_dog.mp3",
			},
		]);

		console.log("Seeding finished");
	} catch (error) {
		console.error(error);
		throw new Error("Error to seed the database");
	}
};

main();
