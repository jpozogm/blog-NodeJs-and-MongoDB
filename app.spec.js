const supertest = require ('supertest');
const app = require('./app');
const request = supertest(app);
const Base64 = require('Base64');


describe('System test', () =>{

    let admintoken;

    it('Testing POST', async ()=>{

        
        const credentials = {
            username: 'Sagan',
            password: '1234'
        }
      
        const login = await request.post('/login')
        .set('authorization', 'Basic ' + Base64.btoa(credentials.username+':'+credentials.password)).expect(200);

        admintoken = login.body.token;

        
        
        const postResponse = await request.post('/posts')
            .set('Authorization', 'Bearer ' + admintoken)
            .set('Accept', 'application/json')
            .send(
                {
                    "postTittle": "Cosmos",
                    "postComments": [],
                    "postAuthorName": "Carl Sagan",
                    "postAuthorNickName": "sagan",
                    "postContent": "Para hacer una tarta de manzana primero tienes que crear un universo."
                })
            .expect(200)
        expect(postResponse.body.postTittle).toBe("Cosmos");
 
        const getResponse = await request.get('/posts').expect(200) 
        expect(getResponse.body.length).toBeGreaterThan(0);


        const postId = postResponse.body._id;
        const getIDResponse = await request.get(`/posts/${postId}`).expect(200)
        expect(getIDResponse.body.postTittle).toBe("Cosmos");


        const putResponse = await request.put(`/posts/${postId}`)
            .set('Authorization', 'Bearer ' + admintoken)
            .set('Accept', 'application/json')
            .send(
                {
                  "postTittle": "Humans",
                   "postComments": [],
                  "postAuthorName": "Carl Sagan",
                   "postAuthorNickName": "sagan",
                   "postContent": "Para hacer una tarta de manzana primero tienes que crear un universo."
               })
            .expect(200)
        expect(putResponse.body.postTittle).toBe("Humans");

        const deleteResponse = await request.delete(`/posts/${postId}`)
            .set('Authorization', 'Bearer ' + admintoken)
            .set('Accept', 'application/json')
            .expect(200)
        expect(deleteResponse).not.toBe(null);

        const getIDResponse2 = await request.get(`/posts/${postId}`).expect(200)
        expect(getIDResponse2.res.text).toBe("null");
    })
})