const neo4j = require("neo4j-driver");

const fetchData = (word) => {
  return new Promise((resolve, reject) => {
    const driver = neo4j.driver(
      "bolt://3.219.47.205:7687",
      neo4j.auth.basic("neo4j", "alignments-energies-sum"),
    );

    const query = `
      MATCH (movie:Movie {title:$favorite})<-[:ACTED_IN]-(actor)-[:ACTED_IN]->(rec:Movie)
      RETURN DISTINCT rec.title AS title LIMIT 20
    `;

    const params = { favorite: word };

    const session = driver.session({ database: "neo4j" });

    session
      .run(query, params)
      .then((result) => {
        const fetchedData = result.records.map((record) => {
          return {title : record.get("title"), id : 1}
        });
        session.close();
        driver.close();
        resolve(fetchedData); // Resolve with fetched data
      })
      .catch((error) => {
        console.error("Error executing query:", error);
        session.close();
        driver.close();
        reject(error); // Reject with error
      });
  });
};

export default fetchData;

// const neo4j = require("neo4j-driver");

// const fetchData = (props) => {
//   const driver = neo4j.driver(
//     "bolt://3.219.47.205:7687",
//     neo4j.auth.basic("neo4j", "alignments-energies-sum"),
//     // {
//     //   /* encrypted: 'ENCRYPTION_OFF' */
//     // }
//   );

//   const query = `
//     MATCH (movie:Movie {title:$favorite})<-[:ACTED_IN]-(actor)-[:ACTED_IN]->(rec:Movie)
//     RETURN DISTINCT rec.title AS title LIMIT 20
//   `;

//   const params = { favorite: "The Matrix" };

//   const session = driver.session({ database: "neo4j" });

//   session
//     .run(query, params)
//     .then((result) => {
//       result.records.forEach((record) => {
//         console.log(JSON.stringify(record));
//       });
//     })
//     .catch((error) => {
//       console.error("Error executing query:", error);
//     })
//     .finally(() => {
//       // Close session and driver regardless of success or failure
//       session.close();
//       driver.close();
//     });
// };

// module.exports = fetchData;