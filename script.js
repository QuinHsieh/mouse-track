
    var ball_x = 0;
    var ball_y = 0;

    var mouse_x = 0;
    var mouse_y = 0;

    var vel_x = 0;
    var vel_y = 0;
    // 用戶移動速度的變量

    const docStyle = document.documentElement.style;
    const strength = 0.15; 
    // 距離感強度參數，把延時設成是滑鼠游標的多少倍速度，由於我們用*，變數會呈現倍數上升。
    const drag = 0.15;
    // 用戶拖拉滑鼠的速度
    

    document.addEventListener("mousemove", (event) => {
        // 取得滑鼠在瀏覽器上的具體座標

        mouse_x = event.clientX;
        mouse_y = event.clientY;

    });

    function delayMotion() {
        // 座標返回到 css 裡面，驅動球體讓球體跟著滑鼠位置。

        var distance_x = mouse_x - ball_x;
        distance_x *= strength;
        vel_x *= drag;
        vel_x += distance_x;

        ball_x += vel_x;

        // console.log("distance_x:", distance_x);
        // console.log("mouse_x:", mouse_x);
        // console.log("ball_x:", ball_x);

        var distance_y = mouse_y - ball_y;
        distance_y *= strength;
        vel_y *= drag;
        vel_y += distance_y;

        ball_y += vel_y;

        docStyle.setProperty("--mouse-x", ball_x);
        docStyle.setProperty("--mouse-y", ball_y);

        docStyle.setProperty("--scale", (vel_x + vel_y) * strength);

        requestAnimationFrame(delayMotion);
        // 讓滑鼠座標ball_x , ball_y 每次更新，再更新到 --mouse-x , --mouse-y上面

    }

    delayMotion();
   