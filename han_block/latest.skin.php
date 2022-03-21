<?php
if (!defined('_GNUBOARD_')) exit; // 개별 페이지 접근 불가
include_once(G5_LIB_PATH.'/thumbnail.lib.php');

$thumb_width = 288;
$thumb_height = 288;
$list_count = (is_array($list) && $list) ? count($list) : 0;
?>

<div class="good-wrap clearfix">
    <?php
    for ($i=0; $i<$list_count; $i++) {
    $thumb = get_list_thumbnail($bo_table, $list[$i]['wr_id'], $thumb_width, $thumb_height, false, true);

    if($thumb['src']) {
        $img = $thumb['src'];
    } else {
        $img = G5_IMG_URL.'/no_img.png';
        $thumb['alt'] = '이미지가 없습니다.';
    }
    // 이미지 태그 생성
    $img_content = '<img src="'.$img.'" alt="'.$thumb['alt'].'" >';
    $wr_href = get_pretty_url($bo_table, $list[$i]['wr_id']);
    // a 태그의 링크를 생성한다
    ?>
        <a href="<?php echo $wr_href; ?>" class="good-link" >
            <span class="good-img">
                <?php echo run_replace('thumb_image_tag', $img_content, $thumb); ?>
            </span>
            <div class="good-info">
                <span class="good-cate">
                    <em class="good-cate-txt">유기농</em>
                </span>
                <span class="good-title">
                    <?php echo $list[$i]['subject']; ?>(4kg)
                </span>
                <span class="good-price">
                    <b>17,900</b>원
                </span>
            </div>

            <span class="good-tag">인기</span>
            <button class="good-cart"></button>
        </a>
        
    <?php }  ?>
    <?php if ($list_count == 0) { //게시물이 없을 때  ?>
    <span">게시물이 없습니다.</span>
    <?php }  ?>
</div>
