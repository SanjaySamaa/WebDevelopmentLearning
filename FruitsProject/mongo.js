async function main() {
    const MongoClient = require('mongodb').MongoClient;
    // const uri ='mongodb+srv://dbUser:<dbpassword>@cluster0.dcu5m.mongodb.net/sample_airbnb?retryWrites=true&w=majority';
    const uri = 'mongodb://127.0.0.1:27017/fruitsDB'
    const client = new MongoClient(uri, { useNewUrlParser: true });
  
    // Connect to the client and query
    await client.connect();
    findListings(client, 5);
    client.close();
  }
  
  main().catch(console.error);
  
  async function findListings(client, resultsLimit) {
    const cursor = client
      .db('fruitsDb')
      .collection('listingsAndReviews')
      .find()
      .limit(resultsLimit);
  
    const results = await cursor.toArray();
    if (results.length > 0) {
      console.log(`Found ${results.length} listing(s):`);
      results.forEach((result, i) => {
        date = new Date(result.last_review).toDateString();
  
        console.log();
        console.log(`${i + 1}. name: ${result.name}`);
        console.log(`   _id: ${result._id}`);
        console.log(`   bedrooms: ${result.bedrooms}`);
        console.log(`   bathrooms: ${result.bathrooms}`);
        console.log(
          `   most recent review date: ${new Date(
            result.last_review
          ).toDateString()}`
        );
      });
    }
  }