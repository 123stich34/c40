class Game{
    constructor(){
        this.rb=createButton("reset")
        this.title=createElement("h2")
        this.l1=createElement("h2")
        this.l2=createElement("h2")

    }
    start(){
        form=new Form()
        form.display()
        player=new Player()
        player.getpc()
        c1=createSprite(width/2-200,height-75)
        c1.addImage(c1i)
        c1.scale=0.1
        
        c2=createSprite(width/2+200,height-75)
        c2.addImage(c2i)
        c2.scale=0.1
        cars=[c1,c2]
        console.log(cars)

    
    }
    getstate(){
        db.ref("gameState").on("value",(a)=>{
            gameState=a.val()
        })
    }
    setState(g){
        db.ref("/").update({gameState:g})
    }
    play(){
        Player.getplayers()
       
        this.rb.position(50,100)
        this.rb.mousePressed(this.reloadPage)
        this.title.html("leader Board")
        this.title.position(50,150)
        this.title.class("ltitle")
        this.l1.html("leader 1;0")
        this.l1.position(50,200)
        this.l1.class("l1")
        this.l2.html("leader2;0")
        this.l2.position(50,250)
        this.l2.class("l2")
        this.showlb()
        form.hide()
       
      //  console.log(allPlayers)
        if(allPlayers!=undefined){
        image(track,0,-height*5,width,height*6)
        var index=0
        for(var key in allPlayers ){
            index+=1
            var x=allPlayers[key].x
            var y=allPlayers[key].y
            cars[index-1].x=x
            cars[index-1].y=y

            if(index==player.index){
                 if(camera.position.y+400>-3650)
                camera.position.y=cars[index-1].y-400
            }

        }
        this.move()



        drawSprites()

    }}
   
    move(){
        if(keyDown("up")){
            player.y-=5
            player.update()
        }
        if(keyDown("down")){
            player.y+=10
            player.update()
        }
        if(keyDown("right")){
            player.x+=10
            player.update()
        }
        if(keyDown("left")){
            player.x-=10
            player.update()
        }
        
    }
    reloadPage(){
        db.ref("/").update({
            gameState:0, pc:1

            })  
            window.location.reload()
    }
    showlb(){
        var l1,l2
        var p=Object.values(allPlayers)
        if((p[0].rank==0&&p[1].rank==0)||p[0].rank==1){
            l1=p[0].name+":"+p[0].score
            l2=p[1].name+":"+p[1].score
        }else{
            l2=p[0].name+":"+p[0].score
            l1=p[1].name+":"+p[1].score

        }
        this.l1.html(l1)
        this.l2.html(l2)

    }

}
