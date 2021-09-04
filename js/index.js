$(document).ready(
    //Đánh giá chất lượng
    function () {
        //Đánh giá 1 sao
        $('.rating-small-icon1').click(
            function () {
                $(this).css('opacity', '0');
                $('.rating-small-icon6').css({ "transform": "translate(432.5px,159px)" })
                $('.rating-small-icon6').css('opacity', '1');
                //Đổi chỗ
                $(this).css({ "transform": "translate(800px,190px)" })
                //Cảm xúc
                $('.r-emotion-small-icon1').css('opacity', '1');
                $('.r-emotion-small-icon2').css('opacity', '0');
                $('.r-emotion-small-icon3').css('opacity', '0');
                $('.r-emotion-small-icon4').css('opacity', '0');
                $(".r-emotional p").html("Sadly");
                $('.r-emotional p').css({ "transform": " translate(0%,0%)" });
            }
        )
        //Đánh giá 2 sao
        $('.rating-small-icon2').click(
            function () {
                $(this).css('opacity', '0');
                $('.rating-small-icon1').css('opacity', '0');
                $('.rating-small-icon6').css({ "transform": "translate(432.5px,159px)" })
                $('.rating-small-icon6').css('opacity', '1');
                $('.rating-small-icon7').css({ "transform": "translate(432.5px,159px)" })
                $('.rating-small-icon7').css('opacity', '1');
                //Đổi chỗ
                $(this).css({ "transform": "translate(800px,190px)" })
                $('.rating-small-icon1').css({ "transform": "translate(800px,190px)" })
                //Cảm xúc
                $('.r-emotion-small-icon1').css('opacity', '1');
                $('.r-emotion-small-icon2').css('opacity', '0');
                $('.r-emotion-small-icon3').css('opacity', '0');
                $('.r-emotion-small-icon4').css('opacity', '0');
                $(".r-emotional p").html("Sadly");
                $('.r-emotional p').css({ "transform": " translate(0%,0%)" });
            }
        )
        //Đánh giá 3 sao
        $('.rating-small-icon3').click(
            function () {
                $(this).css('opacity', '0');
                $('.rating-small-icon1').css('opacity', '0');
                $('.rating-small-icon2').css('opacity', '0');
                $('.rating-small-icon6').css({ "transform": "translate(432.5px,159px)" })
                $('.rating-small-icon6').css('opacity', '1');
                $('.rating-small-icon7').css({ "transform": "translate(432.5px,159px)" })
                $('.rating-small-icon7').css('opacity', '1');
                $('.rating-small-icon8').css({ "transform": "translate(432.5px,159px)" })
                $('.rating-small-icon8').css('opacity', '1');
                //Đổi chỗ
                $(this).css({ "transform": "translate(800px,190px)" })
                $('.rating-small-icon1').css({ "transform": "translate(800px,190px)" })
                $('.rating-small-icon2').css({ "transform": "translate(800px,190px)" })
                //Cảm xúc
                $('.r-emotion-small-icon1').css('opacity', '0');
                $('.r-emotion-small-icon2').css('opacity', '1');
                $('.r-emotion-small-icon3').css('opacity', '0');
                $('.r-emotion-small-icon4').css('opacity', '0');
                $(".r-emotional p").html("Flused");
            }
        )
        //Đánh giá 4 sao
        $('.rating-small-icon4').click(
            function () {
                $(this).css('opacity', '0');
                $('.rating-small-icon1').css('opacity', '0');
                $('.rating-small-icon2').css('opacity', '0');
                $('.rating-small-icon3').css('opacity', '0');
                $('.rating-small-icon6').css({ "transform": "translate(432.5px,159px)" })
                $('.rating-small-icon6').css('opacity', '1');
                $('.rating-small-icon7').css({ "transform": "translate(432.5px,159px)" })
                $('.rating-small-icon7').css('opacity', '1');
                $('.rating-small-icon8').css({ "transform": "translate(432.5px,159px)" })
                $('.rating-small-icon8').css('opacity', '1');
                $('.rating-small-icon9').css({ "transform": "translate(432.5px,159px)" })
                $('.rating-small-icon9').css('opacity', '1');
                //Đổi chỗ
                $(this).css({ "transform": "translate(800px,190px)" })
                $('.rating-small-icon1').css({ "transform": "translate(800px,190px)" })
                $('.rating-small-icon2').css({ "transform": "translate(800px,190px)" })
                $('.rating-small-icon3').css({ "transform": "translate(800px,190px)" })
                //Cảm xúc
                $('.r-emotion-small-icon1').css('opacity', '0');
                $('.r-emotion-small-icon2').css('opacity', '0');
                $('.r-emotion-small-icon3').css('opacity', '1');
                $('.r-emotion-small-icon4').css('opacity', '0');
                $(".r-emotional p").html("Happy");
                $('.r-emotional p').css({ "transform": " translate(0%,0%)" });

            }
        )
        //Đánh giá 5 sao
        $('.rating-small-icon5').click(
            function () {
                $(this).css('opacity', '0');
                $('.rating-small-icon1').css('opacity', '0');
                $('.rating-small-icon2').css('opacity', '0');
                $('.rating-small-icon3').css('opacity', '0');
                $('.rating-small-icon4').css('opacity', '0');
                $('.rating-small-icon6').css({ "transform": "translate(432.5px,159px)" })
                $('.rating-small-icon6').css('opacity', '1');
                $('.rating-small-icon7').css({ "transform": "translate(432.5px,159px)" })
                $('.rating-small-icon7').css('opacity', '1');
                $('.rating-small-icon8').css({ "transform": "translate(432.5px,159px)" })
                $('.rating-small-icon8').css('opacity', '1');
                $('.rating-small-icon9').css({ "transform": "translate(432.5px,159px)" })
                $('.rating-small-icon9').css('opacity', '1');
                $('.rating-small-icon10').css({ "transform": "translate(432.5px,159px)" })
                $('.rating-small-icon10').css('opacity', '1');
                //Đổi chỗ
                $(this).css({ "transform": "translate(800px,190px)" })
                $('.rating-small-icon1').css({ "transform": "translate(800px,190px)" })
                $('.rating-small-icon2').css({ "transform": "translate(800px,190px)" })
                $('.rating-small-icon3').css({ "transform": "translate(800px,190px)" })
                $('.rating-small-icon4').css({ "transform": "translate(800px,190px)" })
                //Cảm xúc
                $('.r-emotion-small-icon1').css('opacity', '0');
                $('.r-emotion-small-icon2').css('opacity', '0');
                $('.r-emotion-small-icon3').css('opacity', '0');
                $('.r-emotion-small-icon4').css('opacity', '1');
                $(".r-emotional p").html("VeryHappy");
                $('.r-emotional p').css({ "transform": " translate(-45px,0%)" });
            }
        )
        //Giảm đánh giá mất 1 sao
        $('.rating-small-icon10').click(
            function () {
                $(this).css('opacity', '0');
                $('.rating-small-icon5').css({ "transform": "translate(800px,150px)" })
                $('.rating-small-icon5').css('opacity', '1');
                //Đổi chỗ
                $(this).css({ "transform": "translate(432.5px,200px)" })
            }
        )
        //Giảm đánh giá mất 2 sao
        $('.rating-small-icon9').click(
            function () {
                $(this).css('opacity', '0');
                $('.rating-small-icon10').css('opacity', '0');
                $('.rating-small-icon5').css({ "transform": "translate(800px,150px)" })
                $('.rating-small-icon5').css('opacity', '1');
                $('.rating-small-icon4').css({ "transform": "translate(800px,150px)" })
                $('.rating-small-icon4').css('opacity', '1');
                //Đổi chỗ
                $(this).css({ "transform": "translate(432.5px,200px)" })
                $('.rating-small-icon9').css({ "transform": "translate(432.5px,200px)" })
                //Cảm xúc
                $('.r-emotion-small-icon1').css('opacity', '0');
                $('.r-emotion-small-icon2').css('opacity', '0');
                $('.r-emotion-small-icon3').css('opacity', '1');
                $('.r-emotion-small-icon4').css('opacity', '0');
                $(".r-emotional p").html("Happy");
                $('.r-emotional p').css({ "transform": " translate(0%,0%)" });
            }
        )
        //Giảm đánh giá mất 3 sao
        $('.rating-small-icon8').click(
            function () {
                $(this).css('opacity', '0');
                $('.rating-small-icon10').css('opacity', '0');
                $('.rating-small-icon9').css('opacity', '0');
                $('.rating-small-icon5').css({ "transform": "translate(800px,150px)" })
                $('.rating-small-icon5').css('opacity', '1');
                $('.rating-small-icon4').css({ "transform": "translate(800px,150px)" })
                $('.rating-small-icon4').css('opacity', '1');
                $('.rating-small-icon3').css({ "transform": "translate(800px,150px)" })
                $('.rating-small-icon3').css('opacity', '1');
                //Đổi chỗ
                $(this).css({ "transform": "translate(432.5px,200px)" })
                $('.rating-small-icon9').css({ "transform": "translate(432.5px,200px)" })
                $('.rating-small-icon10').css({ "transform": "translate(432.5px,200px)" })
                //Cảm xúc
                $('.r-emotion-small-icon1').css('opacity', '0');
                $('.r-emotion-small-icon2').css('opacity', '1');
                $('.r-emotion-small-icon3').css('opacity', '0');
                $('.r-emotion-small-icon4').css('opacity', '0');
                $(".r-emotional p").html("Flused");
                $('.r-emotional p').css({ "transform": " translate(0%,0%)" });
            }
        )
        //Giảm đánh giá mất 4 sao
        $('.rating-small-icon7').click(
            function () {
                $(this).css('opacity', '0');
                $('.rating-small-icon10').css('opacity', '0');
                $('.rating-small-icon9').css('opacity', '0');
                $('.rating-small-icon8').css('opacity', '0');
                $('.rating-small-icon5').css({ "transform": "translate(800px,150px)" })
                $('.rating-small-icon5').css('opacity', '1');
                $('.rating-small-icon4').css({ "transform": "translate(800px,150px)" })
                $('.rating-small-icon4').css('opacity', '1');
                $('.rating-small-icon3').css({ "transform": "translate(800px,150px)" })
                $('.rating-small-icon3').css('opacity', '1');
                $('.rating-small-icon2').css({ "transform": "translate(800px,150px)" })
                $('.rating-small-icon2').css('opacity', '1');
                //Đổi chỗ
                $(this).css({ "transform": "translate(432.5px,200px)" })
                $('.rating-small-icon9').css({ "transform": "translate(432.5px,200px)" })
                $('.rating-small-icon10').css({ "transform": "translate(432.5px,200px)" })
                $('.rating-small-icon8').css({ "transform": "translate(432.5px,200px)" })
                //Cảm xúc
                $('.r-emotion-small-icon1').css('opacity', '1');
                $('.r-emotion-small-icon2').css('opacity', '0');
                $('.r-emotion-small-icon3').css('opacity', '0');
                $('.r-emotion-small-icon4').css('opacity', '0');
                $(".r-emotional p").html("Sadly");
                $('.r-emotional p').css({ "transform": " translate(0%,0%)" });
            }
        )
        //Giảm đánh giá mất 5 sao
        $('.rating-small-icon6').click(
            function () {
                $(this).css('opacity', '0');
                $('.rating-small-icon10').css('opacity', '0');
                $('.rating-small-icon9').css('opacity', '0');
                $('.rating-small-icon8').css('opacity', '0');
                $('.rating-small-icon7').css('opacity', '0');
                $('.rating-small-icon5').css({ "transform": "translate(800px,150px)" })
                $('.rating-small-icon5').css('opacity', '1');
                $('.rating-small-icon4').css({ "transform": "translate(800px,150px)" })
                $('.rating-small-icon4').css('opacity', '1');
                $('.rating-small-icon3').css({ "transform": "translate(800px,150px)" })
                $('.rating-small-icon3').css('opacity', '1');
                $('.rating-small-icon2').css({ "transform": "translate(800px,150px)" })
                $('.rating-small-icon2').css('opacity', '1');
                $('.rating-small-icon1').css({ "transform": "translate(800px,150px)" })
                $('.rating-small-icon1').css('opacity', '1');
                //Đổi chỗ
                $(this).css({ "transform": "translate(432.5px,200px)" })
                $('.rating-small-icon9').css({ "transform": "translate(432.5px,200px)" })
                $('.rating-small-icon10').css({ "transform": "translate(432.5px,200px)" })
                $('.rating-small-icon8').css({ "transform": "translate(432.5px,200px)" })
                $('.rating-small-icon7').css({ "transform": "translate(432.5px,200px)" })
                //Cảm xúc
                $('.r-emotion-small-icon1').css('opacity', '0');
                $('.r-emotion-small-icon2').css('opacity', '0');
                $('.r-emotion-small-icon3').css('opacity', '0');
                $('.r-emotion-small-icon4').css('opacity', '0');
                $(".r-emotional p").html("");
            }
        )
    }
)