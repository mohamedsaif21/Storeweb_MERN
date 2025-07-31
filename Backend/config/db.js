const mongoose =require('mongoose');

const connectMongo = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_CONNECTION_STRING,
    //   {
    //   useNewUrlParser: true,
    //   useUnifiedTopology: true,
    // }
);
    console.log('✅ MongoDB Connected Successfully');
  } catch (error) {
    console.error('❌ MongoDB Connection Failed:', error.message);
    process.exit(1);
  }
};

module.exports=connectMongo;

