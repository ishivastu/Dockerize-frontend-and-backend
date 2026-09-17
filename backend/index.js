import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

const dataSchema = new mongoose.Schema({
    name: String,
    email: String,
    message: String,
});

const Data = mongoose.model('Data', dataSchema);

app.post('/api/data', (req, res) => {
    const data = req.body;

    const newData = new Data({
        name: data.name,
        email: data.email,
        message: data.message,
    });
    newData.save();
    console.log('Received data:', data);
    res.status(200).json({ message: 'Data received successfully', data });
});

app.listen(PORT, () => {

    console.log(`Server is running on port ${PORT}`);

    mongoose.connect(process.env.MONGO_URI)
        .then(() => {
            console.log('Connected to MongoDB');
        })
        .catch((error) => {
            console.error('Error connecting to MongoDB:', error);
        }); 

});