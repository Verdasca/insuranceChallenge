import React, { useEffect, useState } from 'react';
import { Row, Col, Button, Form } from 'react-bootstrap';
import salesData from '../salesData.json';
import pieChartData from '../pieChartData.json';
import './SalesInsurancePage.css';
import PieChartComponent from './components/PieChartComponent';

export default function SalesInsurancePage() {
  const [sales, setSales] = useState(salesData);
  const [salesChart, setSalesCharts] = useState(pieChartData);
  const [products, setProducts] = useState();
  const [validated, setValidated] = useState(false);

  useEffect(() => {
    if (!products) {
      fetch('https://phone-specs-api.azharimm.dev/latest')
        .then(async (data) => setProducts(await data.json()));
    }
  }, [products]);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    event.preventDefault();

    if (form.checkValidity() === false || form[4].value === 'Choose...') {
      setValidated(true);
      event.stopPropagation();
    } else {
      setValidated(false);
      const newSale = {
        id: Math.random(), // Is is only temporary because we're not using APIs
        first_name: form[0].value,
        last_name: form[1].value,
        email: form[2].value,
        age: form[3].value,
        product: form[4].value,
      };
      setSales((current) => [...current, newSale]);
      setSalesCharts(
        salesChart.map(sale => 
            sale.slug === form[4].value 
            ? { ...sale, value : sale.value + 1 } 
            : sale 
      ))
      form.reset();
    }
  };

  const deleteSale = (saleToDelete) => {
    setSales((current) =>
      current.filter((sale) => saleToDelete.id !== sale.id)
    );
    setSalesCharts(
      salesChart.map(sale => 
          sale.slug === saleToDelete.product 
          ? { ...sale, value : sale.value - 1 } 
          : sale 
    ))
  };

  return (
    <div>      
      <div className="row">
        <div className="col-md-6 order-md-2 mb-4">
          <h4 className="d-flex justify-content-between align-items-center mb-3">
              <span className="text-muted">Sales Statistics (nº of sales per device)</span>
          </h4>
          <div className="list-group mb-3 sticky-top">
            <PieChartComponent salesChart={salesChart} />
          </div>
        </div>
        <div className="col-md-6 order-md-1">
          <h4 className="mb-3 text-muted">Insurance Sale</h4>
          <Form noValidate validated={validated} onSubmit={handleSubmit} className="salesForm">
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formFirstName">
                <Form.Label>First Name</Form.Label>
                <Form.Control type="text" placeholder="Enter first name" required />
              </Form.Group>
              <Form.Group as={Col} controlId="formLastName">
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="text" placeholder="Enter last name" required />
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter email" required />
              </Form.Group>
              <Form.Group as={Col} controlId="formAge">
                <Form.Label>Age</Form.Label>
                <Form.Control type="number" min="18" placeholder="Enter age" required />
              </Form.Group>
            </Row>
            <Row className="mb-3">    
              <Col sm={6}>
                <Form.Group as={Col} controlId="formDevice">
                  <Form.Label>Device</Form.Label>
                  <Form.Select defaultValue="Choose...">
                    <option>Choose...</option>
                    {products && products.data.phones.map((device) => (
                      <option key={device.slug} value={device.slug}>{device.phone_name}</option>
                    ))}
                  </Form.Select>
                </Form.Group>
              </Col>  
              <Col xs="auto" className="mt-auto">
                <Button type="submit">Submit</Button>
              </Col>
            </Row>
          </Form>
        </div>
      </div>
      <hr className="mb-4"/>
      <div className="row">
        <div className="col-md-12 order-md-2 mb-4">
          <h4 className="d-flex justify-content-between align-items-center mb-3">
              <span className="text-muted">Insurance Sales</span>
              <span className="badge badge-secondary badge-pill">3</span>
          </h4>
          <div className="list-group mb-3 salesList">
              {sales && sales.map((sale) => (
                <div key={sale.id} className="list-group-item d-flex justify-content-between">
                  <div>
                      <h6 className="my-0">{sale.first_name} {sale.last_name} (Age: {sale.age})</h6>
                      <small className="text-muted">Device: {sale.product}</small>
                  </div>
                  <div>
                    <Button className="font-weight-bold">Update</Button>
                    <Button
                      className="font-weight-bold deleteButton"
                      onClick={() => deleteSale(sale)}
                    >
                      Delete
                    </Button>
                  </div>
                </div>
              ))}
              {sales.length === 0 && (<h6 className="mb-3 text-muted">No insurance sales so far...</h6>)}
          </div>
        </div>
      </div>
    </div>
  );
}
