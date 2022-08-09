$(function(){
    /* xeicon 접근성 */
    $("[class*='xi-']").attr("aria-hidden","true");

    /* faq 아코디언 */
    $(".faq .group > a").on("click", function(){
        $(this).parent().toggleClass("active");
        return false;
    });

  // 갤러리
//  $gallery1 = $('.gallery_view .list ul'); 
//  $gallery2 = $('.gallery_view .thumb ul');

//  $gallery1.bxSlider
//  ({
//      mode            : 'fade',
//      pager           : false,
//      infiniteLoop    : false,
//      controls        : false
//  });
  
//  $gallery2.bxSlider
//  ({
//      pager           : false,
//      maxSlides       : 7,
//      minSlides       : 2,
//      moveSlides      : 1,
//      slideWidth      : 142,
//      onSlideBefore   : function($slideElement, oldIndex, newIndex)
//      {
//          $gallery2.find('li').removeClass('active');
//          $gallery1.goToSlide(newIndex);  

//          setTimeout(function()
//          {
//              $gallery2.find('li[data-index="' + newIndex + '"]').addClass('active');           

//          }, 200);      
//      }
//  });
  $('.gallery_view .thumb li').find('a').on('click', function()
  {
      inx = $(this).parent('li').attr('data-index');
      
      $(this).parent('li').addClass('active');
      $(this).parent('li').siblings('li').removeClass('active');

      $gallery1.goToSlide(inx);
      
      return false;
  });
  
  // $(".faq .group > a").on("click", function(){
	// 	$(this).parent().toggleClass("active").siblings().removeClass("active");
	// 	return false;
	// });

    /* layer */
    $(".schedule_layer .close").on("click", function(){
        $(this).parent().fadeOut();
    });

    /* 댓글 열기 */
    $("div.CommentWrap div.commentList ul li .btn-recomment").on("click", function(){
        $(this).parent().toggleClass("active");
        return false;
    });

    // 체크박스 전체
    var $dataAll = $('#lecturer_all');    
    $dataAll.change(function () {
        var $this = $(this);
        var checked = $this.prop('checked'); 
        $('.program_list input').prop('checked', checked);        
    });
    var boxes = $('.program_list input[name="lecturer"]');
    boxes.change(function () {        
        var boxLength = boxes.length;
        var checkedLength = $('input[name="lecturer"]:checked').length;
        var selectAll = (boxLength == checkedLength);

        $dataAll.prop('checked', selectAll);    
    });

    // 내용 많은 테이블
	//$(".responsive").each(function(){
	//	$(this).before("<p class='horizontal_scroll mobile'><i class='xi-arrow-left'></i><i class='xi-touch'></i><i class='xi-arrow-right'></i><span class='txt'>좌, 우로 이동 가능합니다.</span></p>");
    //})

    //이메일 입력방식 선택
    $('#email_code').change(function(){
        $("#email_code option:selected").each(function () {
            if($(this).val()== '1'){ //직접입력일 경우
                $("#email_2").val('');                        //값 초기화
                $("#email_2").attr("disabled",false); //활성화
            }else{ //직접입력이 아닐경우
                $("#email_2").val($(this).text());      //선택값 입력
                $("#email_2").attr("disabled",true); //비활성화
            }
        });
    });
    // 후원금액 : 직접입력
    $('input:radio[id*="spon_sum"]').change(function(){
        if($('input:radio[id="spon_sum6"]').is(":checked") == true){
            $('input:text[name="spon_sum_ect"]').attr("disabled", false);
        }else{
            $('input:text[name="spon_sum_ect"]').attr("disabled", true);
        }
    });

    //첨부파일
    $(".form_file [id*=file]").on('change',function(){
        console.log('fd');
        var fileName = $(this).val();
        $(this).siblings(".upload-name").val(fileName);        
    });
    
    
    // 이미지박스
    $('.info_wrap.swipe > div').on("touchstart", function (e) {
        $(this).addClass('off');
    })

    /* tab메뉴 */
    function tab(id, tab, tab_content, start_num){
        var id=$("#"+id);
        var tab = id.find("."+tab);
        var tab_list = id.find('.'+tab_content);
        
        //탭 시작 내용 보이기
        tab_list.removeClass('active').eq(start_num).addClass('active');
        tab.find('a').removeClass('on').eq(start_num).addClass('on');
        
        //탭 해당 내용 보이기
        tab.children('li').each(function(index){
            var index = index;
            $(this).children('a').on('click focusin',function(e){
                var href = $(this).attr('href');
    
                tab.find('a').removeClass('on');
                $(this).addClass('on');                
                tab.find('a').attr('title',"비활성 메뉴");
                $(this).attr('title','선택된 메뉴');
    
                tab_list.removeClass('active');                
                $(href).addClass('active');
                tab_list.attr('aria-label',"비활성 내용");
                $(href).attr('aria-label','선택된 내용');
    
                return false;
            });
        });
    }
    tab('tab_wrap','tab','tab_contents',0);

    $(".notice_box h3.title a").click(function () {
        $(this).parents("li").addClass("active").siblings().removeClass("active");
        return false;
    });


    

});
