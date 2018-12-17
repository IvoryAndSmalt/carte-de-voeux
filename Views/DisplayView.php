<?php

$title="Meme Viewer";

include('headerdisplay.php');

?>

<div class="viewercontainer wi">
    <div class="title">
        <h1>Meme Viewer</h1>
    </div>
    <div class="content">
        <h3 id="yourmeme">Votre meme : </h3>
        <div class="display">
            <img id="mymeme" src="<?php
                            foreach($lastmeme as $value){
                                $url_meme = $base_url.$value['url'];
                                $id_meme = $value['id_meme'];
                                echo $url_meme;
                            }
                        ?>" alt="">
        </div>
        <div id="embed" class="share">
            <p>embed : </p>
        
        <input onclick='this.select();' type="text" value="<iframe height='400px' width='100%' src='<?=$url_meme?>'></iframe>" placeholder="<iframe src='<?=$url_meme?>'></iframe>">
        </div>
        <div id="sharesn" class="share">
            <p>share : </p>
        <input onclick='this.select();' type="text" value="<?=$base_url.'Display/'.$id_meme?>" placeholder="<?=$url_meme?>">
        </div>
        <div class="shareicons">
            <a class="twitter-share-button" href="https://twitter.com/intent/tweet?text=Hey,%20Check%20out%20this%20new%20meme%20I%20created!%0A&url=<?=$base_url.'Display/'.$id_meme?>">Tweet</a>
            <script 
                async src="https://platform.twitter.com/widgets.js" charset="utf-8">
            </script>
            <div id="fb-root"></div>
            <script>
                (function(d, s, id) {
                    var js, fjs = d.getElementsByTagName(s)[0];
                    if (d.getElementById(id)) return;
                    js = d.createElement(s); js.id = id;
                    js.src = "https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v3.0";
                    fjs.parentNode.insertBefore(js, fjs);
                }
                (document, 'script', 'facebook-jssdk'));
            </script>

            <!-- Your share button code -->
                <div class="fb-share-button" data-href="<?=$base_url.'Display/'.$id_meme?>" data-layout="button_count">
                </div>
            </div>
    </div>
</div>

<?php

include('footer.php');