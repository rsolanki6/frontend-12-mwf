import React from "react";

export default function ContentApp()
{
	return (
     <main className="container my-5">
          <div className="row">
               {/* Main Content */}
               <div className="col-md-8">
                    <h2>Main Content</h2>
                    <p>
                         This is a simple content area using Bootstrap grid system. You can add
                         text, images, or anything here.
                    </p>
                    <button className="btn btn-primary">Click Me</button>
               </div>
               {/* Sidebar */}
               <div className="col-md-4">
                    <h3>Sidebar</h3>
                    <ul className="list-group">
                         <li className="list-group-item">Item 1</li>
                         <li className="list-group-item">Item 2</li>
                         <li className="list-group-item">Item 3</li>
                    </ul>
               </div>
          </div>
     </main>
	);
}