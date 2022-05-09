import React from 'react';

const Blogs = () => {
    return (
        <div>
          <ul><h1>Difference between javascript and nodejs?</h1>
          <h3>Javascript:</h3>
        <li>Javascript is a programming language that is used for writing scripts on the website. </li>
        <li>Javascript can only be run in the browsers.</li>
        <li>It is basically used on the client-side.</li>
        <li>Javascript is capable enough to add HTML and play with the DOM. 
    </li>
    <li>Javascript is used in frontend development.	</li>
            <h3>Node js:</h3>
            <li>NodeJS is a Javascript runtime environment.
            </li>
            <li>We can run Javascript outside the browser with the help of NodeJS.
            </li>
            <li>It is mostly used on the server-side.
        </li>
        <li>Nodejs does not have capability to add HTML tags.
        </li>
        <li>Nodejs is used in server-side development.
        </li>
          </ul>
          <ul>
          When should you use nodejs and when should you use mongodb

          <p>
         <h1> When should we use Nodejs?</h1>

    Any project needs a programming environment and a runtime library that offers you basic programming tools/support and can compile and/or interpret your code. Nodejs is such as tool for the Javascript programming language. There are other similar tools for other languages such as Python, Java, PHP, C#, C++, Go, etc...

    So, if you want to write some kind of stand-alone program or server in Javascript, then you can use nodejs for it.
          </p>

          <h1>When should we use MongoDB?</h1>
          <p>
          If your application needs the ability to persistently store data in a way that you can efficiently query or update it later, then you would typically use some form of database. There are dozens of popular databases. MongoDB is one such database. MariaDB, MySql, CouchDB, DynamoDB (on AWS), Postgres are examples of other databases. Different databases have different strengths (things they are best at) and different ways of using them so it's a whole different question to choose the right/best database for what you're doing.
            Write to

          </p>
          </ul>
          <ul>
              <h1>Differences between sql and nosql databases</h1>
              <h3>SQL:</h3>
              <li>RELATIONAL DATABASE MANAGEMENT SYSTEM (RDBMS)</li>
              <li>These databases have fixed or static or predefined schema</li>
              <li>These databases are not suited for hierarchical data storage.</li>
              <li>These databases are best suited for complex queries</li>
              <li>Vertically Scalable</li>
              <h3>NoSQL:</h3>
              <li>Non-relational or distributed database system.
            </li>
              <li>They have dynamic schema
        </li>
              <li>These databases are best suited for hierarchical data storage.
        </li>
              <li>These databases are not so good for complex queries
    </li>
              <li>Horizontally scalable
    </li>
          </ul>
        </div>

    );
};

export default Blogs;