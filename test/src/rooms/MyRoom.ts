import {Room, Client} from "colyseus";
import {MyRoomState, PlayerState} from "./schema/MyRoomState";

export class MyRoom extends Room<MyRoomState> {

    onCreate(options: any) {
        this.setState(new MyRoomState());

        this.onMessage("type", (client, message) => {
            //
            // handle "type" message
            //
        });

        this.clock.start();
        this.clock.setInterval(()=>{
            if (this.state)
            {
                this.state.players.forEach((ps, key, map) => {
                    ps.x += MyRoomState.testX;
                    ps.y += MyRoomState.testY;
                })
            }
        }, 100);
    }

    onJoin(client: Client, options: any) {
        console.log(client.sessionId, "joined!");
        this.state.players.clear();
        this.state.players.set(client.sessionId, new PlayerState());
    }

    onLeave(client: Client, consented: boolean) {
        console.log(client.sessionId, "left!");
    }

    onDispose() {
        console.log("room", this.roomId, "disposing...");
    }

}
