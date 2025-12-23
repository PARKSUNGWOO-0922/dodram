(() => {
  const $sender_name = $("[name=sender_name]");
  const $sender_phone = $("[name=sender_phone]");
  const $receiver_name = $("[name=receiver_name]");
  const $receiver_postcode = $("[name=receiver_postcode]");
  const $receiver_address1 = $("[name=receiver_address1]");
  const $receiver_address2 = $("[name=receiver_address2]");
  const $receiver_phone = $("[name=receiver_phone]");

  let receiverInfoType = 1;

  /* prettier-ignore */
  function fillReceiver(name = "", postcode = "", address1 = "", address2 = "", phone = "") {
    $receiver_name.val(name);
    $receiver_postcode.val(postcode);
    $receiver_address1.val(address1);
    $receiver_address2.val(address2);
    $receiver_phone.val(phone);
  }

  function fillReceiverBySender() {
    fillReceiver($sender_name.val(), null, null, null, $sender_phone.val());
  }

  function updateReceiver() {
    switch (receiverInfoType) {
      case 0:
        fillReceiver();
        break;
      case 1:
        fillReceiverBySender();
        break;
    }
  }

  $sender_name.add($sender_phone).on("input change", (e) => {
    if (receiverInfoType != 1) return;
    updateReceiver();
  });

  $("[name=delivery_info_type]").change((e) => {
    receiverInfoType = Number($(e.currentTarget).val());
    updateReceiver();
  });
})();
