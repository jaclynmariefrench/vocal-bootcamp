import React from "react";
import { Route, Switch } from "react-router";
import { GoalProvider } from "./goal/GoalProvider";
import { TypeGoalForm } from "./type/TypeGoalForm";
import { TypeProvider } from "./type/TypeProvider";
import { UserProvider } from "./user/UserProvider";
import AudioApp from "./AudioApp";
import { WarmUpNotesProvider } from "./notes/NotesProvider";
import { NotesForm } from "./notes/NotesForm";
import { NotesList } from "./notes/NotesList";
import { WarmUpProvider } from "./generator/warmUpProvider";
import "./VocalBootcamp.css";

export const ApplicationViews = () => {
  return (
    <>
      <Route path="/user">
        <UserProvider>
          <WarmUpNotesProvider>
            <TypeProvider>
              <WarmUpProvider>
                <GoalProvider>
                  <div className="audio-container">
                    <AudioApp />
                  </div>
                  <div className="notes--add">
                    <Switch>
                      <Route exact path="/user/edit/:noteId">
                        <NotesForm />
                      </Route>
                      <Route path="/user">
                        <>
                          <NotesForm />
                          <NotesList />
                        </>
                      </Route>
                    </Switch>
                  </div>
                </GoalProvider>
              </WarmUpProvider>
            </TypeProvider>
          </WarmUpNotesProvider>
        </UserProvider>
      </Route>
      <Route path="/goals">
        <TypeProvider>
          <GoalProvider>
            <WarmUpProvider>
              <div className="goals-style">
                <TypeGoalForm />
              </div>
            </WarmUpProvider>
          </GoalProvider>
        </TypeProvider>
      </Route>
    </>
  );
};

// import React from "react";
// import { Route } from "react-router";
// import { GoalProvider } from "./goal/GoalProvider";
// import { TypeGoalForm } from "./type/TypeGoalForm";
// import { TypeProvider } from "./type/TypeProvider";
// import { UserProvider } from "./user/UserProvider";
// import AudioApp from "./AudioApp";
// import { WarmUpNotesProvider } from "./notes/NotesProvider";
// import { NotesForm } from "./notes/NotesForm";
// import { NotesList } from "./notes/NotesList";
// import { WarmUpProvider } from "./generator/warmUpProvider";
// import "./VocalBootcamp.css";

// export const ApplicationViews = () => {
//   return (
//     <>
//       <Route path="/user">
//         <UserProvider>
//           <WarmUpNotesProvider>
//             <TypeProvider>
//               <WarmUpProvider>
//                 <GoalProvider>
//                   <div className="audio-container">
//                     <AudioApp />
//                   </div>
//                   <div className="notes--add">
//                     <NotesForm />
//                     <NotesList />
//                   </div>
//                   <div className="notes--list">
//                     <Route exact path="/user/edit/:noteId">
//                       <NotesForm />
//                     </Route>
//                   </div>
//                 </GoalProvider>
//               </WarmUpProvider>
//             </TypeProvider>
//           </WarmUpNotesProvider>
//         </UserProvider>
//       </Route>
//       <Route path="/goals">
//         <TypeProvider>
//           <GoalProvider>
//             <WarmUpProvider>
//               <div className="goals-style">
//                 <TypeGoalForm />
//               </div>
//             </WarmUpProvider>
//           </GoalProvider>
//         </TypeProvider>
//       </Route>
//     </>
//   );
// };
