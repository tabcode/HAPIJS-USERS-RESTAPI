import mongoose from 'mongoose';
mongoose.connect('#',{
    useUnifiedTopology: true,
    useNewUrlParser: true
})
.then(db=>console.log('DB is connected'))
.catch(err=>console.log(err));
mongoose.set('useFindAndModify', false);