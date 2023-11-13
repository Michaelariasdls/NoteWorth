// LOGIN

// <!doctype html>
// <html>
// <head>
//     <title>21 Savage Fan Site</title>
    
//     <link rel="stylesheet" href="//netdna.bootstrapcdn.com/bootstrap/3.0.2/css/bootstrap.min.css">
//     <link rel="stylesheet" href="//netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.min.css">
//     <link rel="stylesheet" href="style.css">
// </head>
// <body>
// <div class="container">
// <div class="col-sm-6 col-sm-offset-3">

//     <h1><span class="fa fa-sign-in"></span> Login</h1>

//     <% if (message.length > 0) { %>
//         <div class="alert alert-danger"><%= message %></div>
//     <% } %>

//     <!-- LOGIN FORM -->
//     <form action="/login" method="post">
//         <div class="form-group">
//             <label>Email</label>
//             <input type="text" class="form-control" name="email">
//         </div>
//         <div class="form-group">
//             <label>Password</label>
//             <input type="password" class="form-control" name="password">
//         </div>

//         <button type="submit" class="btn btn-warning btn-lg">Login</button>
//     </form>

//     <hr>

//     <p>Need an account? <a href="/signup">Signup</a></p>
//     <p>Or go <a href="/">home</a>.</p>


// </div>
// </div>
// </body>
// </html>
// ----------------------------------------------------------------------------------------------
// <!doctype html>
// <html>
// <head>
//     <title>21 Savage Fan Site</title>
    
//     <link rel="stylesheet" href="//netdna.bootstrapcdn.com/bootstrap/3.0.2/css/bootstrap.min.css">
//     <link rel="stylesheet" href="//netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.min.css">
//     <link rel="stylesheet" href="style.css">
// </head>
// <body>
// <div class="container">
// <div class="col-sm-6 col-sm-offset-3">

//     <h1><span class="fa fa-sign-in"></span> Signup</h1>

//     <% if (message.length > 0) { %>
//         <div class="alert alert-danger"><%= message %></div>
//     <% } %>

//     <!-- LOGIN FORM -->
//     <form action="/signup" method="post">
//         <div class="form-group">
//             <label>Email</label>
//             <input type="text" class="form-control" name="email">
//         </div>
//         <div class="form-group">
//             <label>Password</label>
//             <input type="password" class="form-control" name="password">
//         </div>

//         <button type="submit" class="btn btn-warning btn-lg">Signup</button>
//     </form>

//     <hr>

//     <p>Already have an account? <a href="/login">Login</a></p>
//     <p>Or go <a href="/">home</a>.</p>

// </div>
// </div>
// </body>
// </html>
// --------------------------------------------------------------------------------------------------------------
// <!doctype html>
// <html>
// <head>
//     <title>Expense Tracker</title>
   
//     <link rel="stylesheet" href="//netdna.bootstrapcdn.com/bootstrap/3.0.2/css/bootstrap.min.css">
//     <link rel="stylesheet" href="//netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.min.css">
//     <link rel="stylesheet" href="style.css">
// </head>
// <body>
// <div class="container">

//     <div class="page-header text-center">
//         <h1><span class="fa fa-anchor"></span> Profile Page</h1>
//         <a href="/logout" class="btn btn-default btn-sm">Logout</a>
//     </div>

//     <div class="row">

//         <!-- LOCAL INFORMATION -->
//         <div class="col-sm-6">
//             <div class="well">
//                 <h3><span class="fa fa-user"></span> Local</h3>

//                 <% if (user.local.email) { %>
//                     <p>
//                         <strong>id</strong>: <%= user._id %><br>
//                         <strong>email</strong>: <%= user.local.email %><br>
//                         <strong>password</strong>: <%= user.local.password %>
//                     </p>

//                     <a href="/unlink/local" class="btn btn-default">Unlink</a>
//                 <% } else { %>
//                     <a href="/connect/local" class="btn btn-default">Connect Local</a>
//                 <% } %>

//             </div>
//         </div>
//         <div class="col-sm-6">
//           <div>To-Do</div>
//           <ul class="messages">
//           <% for(var i=0; i<messages.length; i++) {%>
//             <li class="message">
//               <span><%= messages[i].name %></span>
//               <span><%= messages[i].msg %></span>
//               <span><%= messages[i].thumbUp %></span>
//               <span><i class="fa fa-check" aria-hidden="true"></i></span>
//               <span><i class="fa fa-thumbs-down" aria-hidden="true"></i></span>
//               <span><i class="fa fa-square" aria-hidden="true"></i></span>
//             </li>
//           <% } %>
//           </ul>

//           <h2>Add a To-do</h2>
//         <% if (user.local.email) { %>
//           <form action="/messages" method="POST">
//             <input type="text" value="<%= user.local.email %>" name="name">
//             <input type="text" placeholder="input" name="msg">
//             <button type="submit">Submit</button>
//           </form>
//         </div>
//         <% } %>
//     </div>
// </div>

// <script src="main.js"></script>

// </body>
// </html>
// ---------------------------------------------------------------------------------------------------------------
