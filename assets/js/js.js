            // Thay đổi ngày bắt đầu đếm tại đây - cấu trúc => YYYY/MM/DD
            const yourDate = new Date("2019-04-11T00:00:00"),
            // Thay đổi bài hát tại đây
            music = ['noi-nay-co-anh', 'nguoi-am-phu', 'cung-anh', 'da-lo-yeu-em-nhieu'];
            document.addEventListener('DOMContentLoaded', function() {
                var rootTime = document.querySelector("time");
                document.querySelector("date").textContent = Math.floor(Math.floor((new Date() - yourDate) / 1000) / 60 / 60 / 24) + " DAYS";
                function olock() {
                    var today = new Date(),
                        hrs = (Math.floor(Math.floor((today - yourDate) / 1000) / 60 / 60)) % 24,
                        min = (Math.floor(Math.floor((today - yourDate) / 1000) / 60)) % 60,
                        sec = Math.floor((today - yourDate) / 1000) % 60;
                    rootTime.textContent = `${(hrs>9)?hrs:"0"+hrs}:${(min>9)?min:"0"+min}:${(sec>9)?sec:"0"+sec}`;
                }
                olock();
                var timer = setInterval(function() {
                    olock()
                }, 1000);
                // Thay đổi link ramdom bài hát tại đây
                document.querySelector("audio").setAttribute("src", `./assets/music/${music[Math.floor(Math.random()*music.length)]}.mp3`);
            }, false);

src="//ajax.googleapis.com/ajax/libs/jquery/2.0.0/jquery.min.js"


$(window).load(function () {
    setTimeout(function () {
        $(".spinner").fadeOut("slow");
            setTimeout(function () {
                $("#loader").fadeOut("slow")
        }, 1000)
    }, 1000)
});
