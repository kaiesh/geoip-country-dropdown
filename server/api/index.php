<?php
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
header('Access-Control-Max-Age: 86400');
header("Expires: Mon, 26 Jul 1997 05:00:00 GMT");
header("Cache-Control: no-cache");
header('Content-Type: application/json');

switch($_POST["action"]){
  case "clientgeoip":
  if (!function_exists('getClientIP')){
    function getClientIP(){
      if (isset($_SERVER["HTTP_CF_CONNECTING_IP"])){
        $_SERVER['REMOTE_ADDR'] = $_SERVER["HTTP_CF_CONNECTING_IP"];
      };
      foreach (array('HTTP_CLIENT_IP', 'HTTP_X_FORWARDED_FOR', 'HTTP_X_FORWARDED', 'HTTP_X_CLUSTER_CLIENT_IP', 'HTTP_FORWARDED_FOR', 'HTTP_FORWARDED', 'REMOTE_ADDR') as $key){
        if (array_key_exists($key, $_SERVER)){
          foreach (explode(',', $_SERVER[$key]) as $ip){
            $ip = trim($ip);
            if (filter_var($ip, FILTER_VALIDATE_IP, FILTER_FLAG_NO_PRIV_RANGE | FILTER_FLAG_NO_RES_RANGE) !== false){
              return $ip;
            };
          };
        };
      };
      return false;
    };
  };

  $best_known_ip = getClientIP();

  if (!empty($best_known_ip)){
    $ip = $clients_ip = $client_ip = $client_IP = $best_known_ip;
  }else{
    $ip = $clients_ip = $client_ip = $client_IP = $best_known_ip = '';
  };

  $return = array(
    "status"=>"ok",
    "geo"=>array(
      //Use the CloudFlare GEO IP request header tags
      "country_code" => $_SERVER["HTTP_CF_IPCOUNTRY"]
    ),
    "ip"=>$best_known_ip
  );
  break;

  default:
  header('HTTP/1.0 418 I\'m a teapot');
  $return = array("status"=>"fail", "debug"=>"Unknown action. I'm a teapot.");
  break;
}
echo json_encode($return);
