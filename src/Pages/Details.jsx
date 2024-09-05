import React from 'react';
import { Carousel } from 'react-bootstrap'; // Import Carousel from React Bootstrap
import overview from '../assets/overview.png'
import customer from '../assets/customer.png'
import delivery_sales from '../assets/delivery_sales.png'
import driver_list from '../assets/driver_list.png'
import employee from '../assets/employee.png'
import inventory from '../assets/inventory.png'
import order_for_delivery from '../assets/order_for_delivery.png'
import order_for_delivery2 from '../assets/order_for_delivery2.png'
import purchase from '../assets/purchase.png'
import purhcaserepo from '../assets/purhcaserepo.png'
import register_customer from '../assets/register_customer.png'
import sales_in_store from '../assets/sales_in_store.png'
import sales_report from '../assets/sales_report.png'
import supplier from '../assets/supplier.png'

const Details = () => {
  return (
    <div className="min-h-screen p-2.5 pt-20 bg-gray-400">
      <div className="flex flex-col md:flex-row">
        {/* Carousel Section */}
        <div className="md:w-1/2 p-2">
          <Carousel className="w-full">
            <Carousel.Item>
              <img
                className="d-block w-full object-cover"
                src={overview}
                alt="Overview"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-full object-cover"
                src={customer}
                alt="Customer"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-full object-cover"
                src={delivery_sales}
                alt="Delivery Sales"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-full object-cover"
                src={driver_list}
                alt="Driver List"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-full object-cover"
                src={employee}
                alt="Employee"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-full object-cover"
                src={inventory}
                alt="Inventory"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-full object-cover"
                src={order_for_delivery}
                alt="Order for Delivery"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-full object-cover"
                src={order_for_delivery2}
                alt="Order for Delivery 2"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-full object-cover"
                src={purchase}
                alt="Purchase"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-full object-cover"
                src={purhcaserepo}
                alt="Purchase Repo"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-full object-cover"
                src={register_customer}
                alt="Register Customer"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-full object-cover"
                src={sales_in_store}
                alt="Sales in Store"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-full object-cover"
                src={sales_report}
                alt="Sales Report"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-full object-cover"
                src={supplier}
                alt="Supplier"
              />
            </Carousel.Item>
          </Carousel>
        </div>

        {/* List Section */}
        <div className="md:w-1/2 p-2 mt-4 md:mt-0">
          <ul className="list-none list-inside space-y-2">
            <li className="border border-gray-300 p-2 rounded">HTML</li>
            <li className="border border-gray-300 p-2 rounded">CSS</li>
            <li className="border border-gray-300 p-2 rounded">BOOTSTRAP</li>
            <li className="border border-gray-300 p-2 rounded">REACT</li>
            <li className="border border-gray-300 p-2 rounded">REACT BOOTSTRAP</li>
            <li className="border border-gray-300 p-2 rounded">MATERIAL UI</li>
            <li className="border border-gray-300 p-2 rounded">Not Deployed email me for your custom one and deployment</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Details;
