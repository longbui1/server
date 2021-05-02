const mongoose = require('mongoose');
try {
    mongoose.connect(
        'mongodb+srv://api_blog:123321456@cluster0.jrkp5.mongodb.net/api_blog?retryWrites=true&w=majority',
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
        }
    );
    console.log('Database Connected Successfully');
} catch (err) {
    console.log('Database Not Connected');
}
