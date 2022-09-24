
import React from 'react';
import Table from 'react-bootstrap/Table'

export default function TableExample() {
  return (
    <>
  <h3>Dark Variant Small Size Table</h3>
 
  <Table stripped bordered hover variant="dark" size="sm">
   <thead>
     <tr>
       <th width="170">Id</th>
       <th width="170">Estado</th>
       <th width="170">Fecha Entrega</th>
       <th width="870">Ciudad Entrega</th>
       <th width="1950">Nombre Destinatario</th>
  
     </tr>
   </thead>
   <tbody>
     <tr>
       <td>1</td>
       <td>Placeholder</td>
       <td>Placeholder</td>
       <td>Placeholder</td>
       <td>Placeholder</td>
  
     </tr>
     <tr>
       <td>2</td>
       <td>Placeholder</td>
       <td>Placeholder</td>
       <td>Placeholder</td>
       <td>Placeholder</td>
  
     </tr>
     <tr>
       <td>3</td>
       <td>Placeholder</td>
       <td>Placeholder</td>
       <td>Placeholder</td>
       <td>Placeholder</td>
  
     </tr>
     <tr>
       <td>4</td>
       <td>Placeholder</td>
       <td>Placeholder</td>
       <td>Placeholder</td>
       <td>Placeholder</td>
  
     </tr>
     <tr>
       <td>5</td>
       <td>Placeholder</td>
       <td>Placeholder</td>
       <td>Placeholder</td>
       <td>Placeholder</td>
  
     </tr>
     <tr>
       <td>6</td>
       <td>Placeholder</td>
       <td>Placeholder</td>
       <td>Placeholder</td>
       <td>Placeholder</td>
  
     </tr>
  
   </tbody>
 </Table>
     </>
   );
}
