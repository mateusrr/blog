const AdSense = () => {
  return (
    <>
      <script async src={process.env.NEXT_ADSENSE_SCRIPT_SRC}
                  crossorigin="anonymous"></script>
                  {/* Bloco1 */}
                  <ins className="adsbygoogle"
                    style={{display:'block'}}
                    data-ad-client={process.env.NEXT_ADSENSE_CLIENT_ID}
                    data-ad-slot={process.env.NEXT_ADSENSE_SLOT_ID}
                    data-ad-format="auto"
                    data-full-width-responsive="true"></ins>
                  <script>
                    (adsbygoogle = window.adsbygoogle || []).push({});
                  </script>
    </>
  );
};

export default AdSense;
