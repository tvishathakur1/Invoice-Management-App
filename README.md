# Invoice Management Application

## Introduction
The Invoice Management Application is designed for B2B Fintech, providing businesses to manage invoices efficiently. This application streamlines different operations that can be performed in the invoices data to track payments by clients.

## Technologies Used

### Frontend
- **React**: A JavaScript library for building user interfaces, particularly single-page applications where you can manage state efficiently and create reusable UI components.
  
- **HTML & CSS**: The standard markup language (HTML) for creating web pages and CSS for styling those pages. Together, they form the backbone of the user interface, ensuring it is both functional and visually appealing.

### Backend
- **Java Servlets**: A Java programming language technology used to extend the capabilities of servers that host applications accessed via a request-response programming model. Servlets are crucial for handling requests and generating dynamic web content.

### Database
- **MySQL**: The application uses MySQL as the database management system to store and manage invoice data.

### Extended Technologies
- **Struts**: A framework for developing Java EE web applications that provides a structured way to build and manage complex applications with features like MVC architecture.

- **Spring**: A powerful framework for building enterprise applications in Java. It provides comprehensive infrastructure support, enabling developers to create high-performing, reusable code.

- **Hibernate**: An Object-Relational Mapping (ORM) framework for Java, facilitating the interaction between Java applications and relational databases. Hibernate simplifies database operations, offering features like caching, transaction management, and lazy loading.

## Use Cases
- **CRUD Operations**:
  - **Create**: Users can create new invoices with customer details such as customer name, due date, payment date, amount, invoice currency, etc.
  - **Read**: Users can view a list of all invoices along with their statuses.
  - **Update**: Users can modify existing invoices to reflect any changes, such as updates to item prices or client information.
  - **Delete**: Users can delete invoices that are no longer needed.
  - **Advanced Search Functionality**: Users can perform complex searches on invoices based on various criteria, such as date ranges, status, client names, and payment terms.

## Application Flow

### Frontend Flow
1. **User Authentication**: Authorized Users only are allowed log in to the application through their username and password.
2. **Dashboard Access**: After logging in, users are directed to the dashboard, where they can view a summary of invoices.
3. **Invoice Management**:
    - **Create**: 
     - Users click on the add button and fill in the necessary details.
     - Upon clicking the "Submit" button, the frontend constructs an HTTP POST request, sending the invoice details as a JSON payload in the request body to the server endpoint (e.g., `/addinvoices`).

   - **Read**: 
     - To view a list of all invoices, the frontend sends an HTTP GET request to the server (e.g., `/getinvoices`).
     - The request may include query parameters to filter results based on criteria such as date range or invoice status. The server responds with the relevant invoice data in JSON format, which is then rendered on the dashboard.

   - **Update**: 
     - Users can modify existing invoices by selecting an invoice, clicking on the Edit button and editing its details as they will be prepopulated in .
     - After making changes, the frontend sends an HTTP PUT request to the server, including the updated invoice details in the request body. The server processes the update and responds with the updated invoice data.

   - **Delete**: 
     - To delete an invoice, users can select an invoice and click on the "Delete" button.
     - The frontend sends an HTTP DELETE request to the server with an id which is the unique identifier of the invoice to be deleted. The server processes the request and confirms the deletion.

### Backend Flow
1. **Request Handling**: Java Servlets handle incoming HTTP requests from the frontend.
2. **Business Logic**: The application processes requests and implements business logic using the Spring framework.
3. **Database Interaction**: Hibernate facilitates interaction with the database, allowing for operations such as saving invoices, updating statuses, and fetching client information.
4. **Response Generation**: After processing, the application generates responses that are sent back to the frontend for display.

## MVC Architecture
The application follows the MVC (Model-View-Controller) architecture, which separates the application logic into three interconnected components:

1. **Model**: Represents the data and the business logic. In this application, it manages the data related to invoices and clients.
   
2. **View**: The user interface that displays the data. In this application, it consists of React components that present the invoice information to users.
   
3. **Controller**: Handles the communication between the Model and the View. In this application, Java Servlets and Spring Controllers manage the requests and responses.

<img src="https://miro.medium.com/v2/resize:fit:1100/format:webp/1*y8Z4MgBS_s8d4o26arDJ4w.png" alt="MVC Diagram" width="400" height="300">

## Conclusion
The Invoice Management Application is a comprehensive solution for businesses looking to streamline their invoicing processes. With the use of modern technologies like React and Java Servlets, along with robust frameworks such as Struts, Spring, and Hibernate, this application is designed to be efficient, reliable, and user-friendly.
