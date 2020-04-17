module.exports = {
    port: process.env.PORT || 3000,
    db: process.env.MONGODB || "mongodb://admin:admin@localhost:27018/postsDB?authSource=admin"
}