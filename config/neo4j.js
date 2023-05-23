import neo4j from "neo4j-driver";

// Create a new Neo4j driver instance
const driver = neo4j.driver(
  "neo4j+s://f9d29b22.databases.neo4j.io", // your Neo4j instance URL
  neo4j.auth.basic("neo4j", "CmTP9DotoB7C0eZE0h-W8_d8KxRQ7Ry5H_rDcN5zXUg") // your Neo4j credentials
);

export default driver;
