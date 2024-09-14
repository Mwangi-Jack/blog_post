import mongoose from 'mongoose';


const DailySchema = new mongoose.Schema({
	day: {
		type: String,
		required: true,
		enum: ['Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat', 'Sun']
	},
	date: { type: Date, required: true },
	views: { type: Number, required: true}
});

const OverrallSchema = new mongoose.Schema({
	total_views: { type: Number, default: 0 },
	total_posts: { type: Number, default: 0 },
	total_reads: { type: Number, default: 0 },
});


const StatisticsSchema = new mongoose.Schema({
	userId: { type: String, requierd: true },
	overrall: { type: OverrallSchema, required: true },
	daily: { type: [DailySchema], required: true },
})

const Statistics =  mongoose.models.Statistics || mongoose.model('Statistics', StatisticsSchema)

export default Statistics;
