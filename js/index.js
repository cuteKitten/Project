/**
 * Created by sd on 2017/10/8.
 */
$(function(){
    /*��װ�ֲ�ͼ*/
    // function Slider(){
    // var Slider = function ($slider) {
    //     /*1. �ֲ�ͼ����*/
    //     this.$slider = $slider;
    //     /*2. ͼƬ����*/
    //     this.$imageBox = this.$slider.find('.image');
    //     this.$imageList = this.$imageBox.find('li');
    //     /*3. ������*/
    //     this.$pointBox = this.$slider.find('.point');
    //     this.$pointList = this.$pointBox.find('span');
    //     /*4. �����л��İ�ť*/
    //     this.$leftBtn = this.$slider.find('.arrow-left');
    //     this.$rightBtn = this.$slider.find('.arrow-right');
    //     /*5. ��ǰ����*/
    //     this.index = 0;
    //     /*6. �ֲ�ʱ����*/
    //     this.spaceTime = 2000;
    //     /*7. �л��Ķ���ִ��ʱ��*/
    //     this.duration = 1000;
    //     /*8. ��¼��ʱ��*/
    //     this.timer = null;
    //     /*9. ��������*/
    //     this.direction = 'left';
    //     /*10. �������*/
    //     this.maxIndex = this.$imageList.length - 1;
    //     this.minIndex = 0;
    //     /*11. ��ǰ�ֲ�ͼ���*/
    //     this.sliderWidth = this.$slider.width();
    //     /*������*/
    //     this.flag = true;
    //     /*���ó�ʼ������*/
    //     this.init();
    // }
    // /*��������*/
    // Slider.prototype.init = function () {
    //     this.next();
    //     this.bindEvent();
    // }
    // Slider.prototype.bindEvent = function(){
    //     var _self = this;
    // /*��߼�ͷ�ĵ���¼�*/
    //     this.$leftBtn.on('click',function(){
    //     //�һ����л���һ��ͼƬ
    //         /*������*/
    //         if(!_self.flag) return false;
    //         clearTimeout(_self.timer);
    //         _self.index --;
    //         if(_self.index<_self.minIndex){
    //              _self.index = _self.maxIndex;
    //         }
    //     _self.direction = 'right';
    //         /*���û���*/
    //         _self.slider();
    //     });
    // /*�ұ߼�ͷ�ĵ���¼�*/
    //     this.$rightBtn.on('click',function(){
    //         //�󻬶��л���һ��ͼƬ
    //         if(!_self.flag) return false;
    //         clearTimeout(_self.timer);
    //         _self.index ++;
    //         if (_self.index > _self.maxIndex) {
    //             _self.index = _self.minIndex;
    //         }
    //         _self.duration = 'left';
    //         _self.slider();
    //     });
    //     /*��ָʾ���л�*/
    //     this.$pointList.on('click',function(){
    //         /*�ǵ�ǰ�Ѿ�ѡ���ٵ���Ч*/
    //         if($(this).hasClass('now')) return false;
    //         //������
    //         if(!_self.flag) return false;
    //         clearTimeout(_self.timer);
    //         /*��Ҫ�жϻ����ķ���*/
    //         var oldIndex = _self.$pointBox.find('span.now').index();
    //         var nowIndex = $(this).index();
    //         _self.index = nowIndex;

    //         if(oldIndex<nowIndex){
    //             _self.direction = 'left';
    //         }else{
    //             _self.direction = 'right';
    //         }
    //         _self.slider();
    //     });
    // }
    // /*��һ��*/
    // Slider.prototype.next = function () {
    //     var _self = this;
    //     clearTimeout(_self.timer);
    //     _self.timer = setTimeout(function () {
    //         _self.index++;
    //         if (_self.index > _self.maxIndex) {
    //             _self.index = _self.minIndex;
    //         }
    //         _self.slider();
    //     },_self.spaceTime);
    // }
    // /*��һ��*/
    // Slider.prototype.prev = function () {

    // }
    // /*�����л�*/
    // Slider.prototype.slider = function () {
    //     this.flag = false;
    //     //console.log(0);
    //     /*��ǰ��������ʱ��ʹ�õ��� setInterval ���������û��ִ�����ִ������һ��*/
    //     /*����ʹ�� setTimeout ִ��һ��  �Ե���*/
    //     /*��Ҫ��ʾ��ͼ*/
    //     var $nowImage = this.$imageList.eq(this.index);
    //     /*ԭ����ʾ��ͼ*/
    //     var oldIndex = this.$pointBox.find('span.now').index();
    //     var $oldImage = this.$imageList.eq(oldIndex);
    //     /*������֮ǰ��Ҫ��λ*/
    //     this.$imageList.css({zIndex:1});
    //     var _self = this;
    //     if(this.direction == 'left'){
    //         /*ͼƬ���ұ�*/
    //         $oldImage.css({left:0,zIndex:2}).animate({left:-this.sliderWidth},this.duration);

    //         $nowImage.css({left:this.sliderWidth,zIndex:2}).animate({left:0},this.duration,function () {
    //            _self.flag = true;
    //             /*�ı��*/
    //             _self.$pointList.removeClass('now').eq(_self.index).addClass('now');
    //             /*����ִ�����  ��һ��ͼ*/
    //             _self.next();
    //         })
    //     }else{
    //         /*ͼƬ�����*/
    //         $oldImage.css({left:0,zIndex:2}).animate({left:this.sliderWidth},this.duration);
    //         $nowImage.css({left:-this.sliderWidth,zIndex:2}).animate({left:0},this.duration,function(){
    //             /*��ʲô����*/
    //             _self.flag = true;
    //             _self.$pointList.removeClass('now').eq(_self.index).addClass('now');
    //             /*Ĭ�ϵ��Զ��ֲ�*/
    //             this.direction = 'left';
    //             _self.next();
    //         })

    //     }
    // }
    // new Slider($('.slider'));
    // }
    // Slider();
    /*----------------�ҵ�.���ܵ�Tap���л�-------------------------------------*/
             $('.tab-item').mouseenter(function () {
                 /*��ȡ��ǰ�����ҳǩ*/
                 var $this = $(this);
                 /*����Ѿ���ѡ����  ִֹͣ��*/
                 if($this.hasClass('active')){
                     return false;
                 }
                 /*�����ҳǩѡ��*/
                 $this.addClass('active').siblings().removeClass('active');
                 /*�����ҳǩ��Ӧ������Ҫ��ʾ*/
                 $('.brick-list').eq($this.index()).addClass('selected').siblings().removeClass('selected');
             })


    /*----------------------�����б���Tap���л�-------------------------------------------*/
            // $('.topbar-nav li').mouseenter(function () {
            //     /*��ȡ��ǰ�����ҳǩ*/
            //     var $this = $(this);
            //     //$('.detailGoods').fadeIn;
            //     /*����Ѿ���ѡ����  ִֹͣ��*/
            //     //if($this.hasClass('active')){
            //     //    return false;
            //     //}
            //     //*�����ҳǩ��Ӧ������Ҫ��ʾ*/
            //     $this.parent().siblings(".detailGoods").stop(true,false).delay(400).slideDown(200);
            //     $(".detailGoods").children("ul").eq($(this).index()).show().siblings().hide();

            // })
            // $('.').hover(function(){
                
            // },function(){})
            $('.detailGoods').mouseleave(function () {

                $(this).stop().delay(400).slideUp(200,function(){
                    $('.detailGoods ul').hide();  
                });
                // 

                /*�����ҳǩ��Ӧ������Ҫ��ʾ*/

            })
    //$(".navi-shortcut").on("mouseleave",function(){
    //    $(this).find(".detailGoods").stop().delay(400).slideUp(200);
    //});


    /*----------------------��ҳ��Tap���л�-------------------------------------------*/
            
        $('.detailGoods-2').mouseleave(function () {
            $(this).hide();
        })
    /*--------------------���ǵ�Ʒ�����л�-------------------------------------------------------------*/
        //  $('.pre').click(function(){
        //       $(this).css("color","#ccc");
        //      $('.ulContent').animate({left: '0'}, "show");
        //  })
        // $('.next').click(function(){
        //     $(this).css("color","#ccc");
        //     $('.ulContent').animate({left: '-1226px'}, "show");
        // })
    /*------------------�ҵ�.���ܵ��б�����--------------------------------------------------------------*/
        $('.brick-item').mouseenter(function(){

            $(this).find('.popBox').show().animate({height: '75px'}, "fast").parent('.brick-item').siblings().find('.popBox').hide().animate({height: '0'}, "fast");
        });
        $('.brick-item').mouseleave(function(){
            $(this).find('.popBox').hide();
        })
})

