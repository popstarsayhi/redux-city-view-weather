#### Component
* input search
* weather track
* carousel 

#### redux follow chat without middleware 
state change -> action creator(return an object) -> action(pass to) -> dispatch(forward action to) -> reducer -> state 

#### redux follow chat with middleware 
state change -> action creator(return an object) -> action(pass to) -> dispatch(forward action to) -> middleware(send action to) -> reducer -> state 

* middleware will hold the data until it receive data from the server, once it gets data, it will dispatch and send to reducer  