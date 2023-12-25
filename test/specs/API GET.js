import { expect } from 'chai';
import supertest from 'supertest';
const request=supertest('https://0zi6jjtvoe.execute-api.eu-west-1.amazonaws.com/preprod/order-detail/');

const TOKEN = 
'eyJ4NXQiOiJObUptT0dVeE16WmxZak0yWkRSaE5UWmxZVEExWXpkaFpUUmlPV0UwTldJMk0ySm1PVGMxWkEiLCJraWQiOiJObUptT0dVeE16WmxZak0yWkRSaE5UWmxZVEExWXpkaFpUUmlPV0UwTldJMk0ySm1PVGMxWkEiLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiJ2aWpheWF2YXJkaGFuLnJlZGR5QHdpY2tlcy5jby51ayIsImF1ZCI6IklGOVFwdXh6cnFOYmxNcWtiWjVnU2VIMVFKQWEiLCJuYmYiOjE3MDEwNjU5NDAsImF6cCI6IklGOVFwdXh6cnFOYmxNcWtiWjVnU2VIMVFKQWEiLCJzY29wZSI6ImVtYWlsIiwiaXNzIjoiaHR0cHM6XC9cL2lkcy5wcmVwcm9kLndpY2tlcy5zeXN0ZW1zXC9vYXV0aDJcL3Rva2VuIiwiZXhwIjoxNzAxMDY5NTQwLCJpYXQiOjE3MDEwNjU5NDAsImp0aSI6ImRhOWQ1MTk2LTUxYjUtNGVlNi04M2M0LTNkY2RlNjA5NWQ5MyJ9.CuHPEZ4Dvs-U1BVyx-T_bGwWfYQZWIW6doYd2l71dm2JVYNegA938lgeAGuPO_l2p13daJUbPl7DND9yyxO35wfGWLqJDoddQS7jqPbTPvyC8Rfkb6tsAlfp7NSndN-_2gwlREG65EJTtQluuyECtkdH-AAEocSbU8_ZrJGlDEQ';
//94abae6c486653abb3680df02f9420bfd85c9bacdb10aae3931b712ff7e96f4b
describe('orders',()=> {
   it('POST/orders',()=>{
      const data = {"lastFilterUpdatedAt":"2023-11-25T05:30:49.050Z","gridtableview":"grid","orderNumber":"","supplierId":"","status":null,"type":null,"storeId":"","destination":"","fromDate":"","toDate":"","deliveryFromDate":"","deliveryToDate":"","actDeliveryFromDate":"","actDeliveryToDate":"","itemNumber":"","createdBy":"","nonEDIPOsFlag":0,"emailedToVendorFlag":0,"isManualUpload":null,"currentPage":1,"pageSize":50,"sort":"revisedScheduledDeliveryDate,originalScheduledDeliveryDate,Order.oId|true"};
      return request
      .post('orders')
      .set('Authorization','Bearer${TOKEN}')
      .send(data)
      .then((res)=>{
       console.log(res.body);
       expect(res.body.data.orderNumber).to.eq(data.orderNumber);
       expect(res.body.data.supplierId).to.deep.include(data.supplierId);
       done();
    });
   }); 

        

it('GET/users',(done)=>{
      request.get('21108?access-token=${TOKEN}').end((err,res) =>
      {
       expect(res.body.data).to.not.be.empty;
       console.log(res.body);
       done();
      });
     });
   });

   it('PUT/users/:id',()=>{
      const data={
         status:"In-Ative",
         gender:"Femal"
      }
     return  request
     .put('users/5776233')
     .set('Authorization','Bearer ${TOKEN}')
     .send(data)
     .then(res=> {
      console.log(res.body);
      
     });
  
   }); 

   it('DELETE/users/:id',()=>{
      return request
      .delete('users/5776237')
      .set('Authorization','Bearer${TOKEN}')
      done();
   //   .then(res =>{
   //    expect(res.body.data).to.be.eq(null);
   //   });
    });



   it('GET/users',()=>{
 request.get('users?access-token=${TOKEN}').end((err,res)=>{
    expect(res.body.data).to.not.be.empty;
    done();
}); 

it('GET/users/:id',()=>{
    return request.get('users/5775257?access-token=${TOKEN}').then((res)=>{
       expect(res.body.data).to.not.be.empty;
       
   });
});   });
