export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email } = req.body || {};

  if (!email) {
    return res.status(400).json({ error: 'Email is required' });
  }

  try {
    // Step 1: Get a fresh access token using the stored refresh token
    const tokenResp = await fetch('https://accounts.zoho.in/oauth/v2/token', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({
        refresh_token: process.env.ZOHO_REFRESH_TOKEN,
        client_id: process.env.ZOHO_CLIENT_ID,
        client_secret: process.env.ZOHO_CLIENT_SECRET,
        grant_type: 'refresh_token'
      })
    });

    const tokenData = await tokenResp.json();

    if (!tokenData.access_token) {
      console.error('Zoho token error:', JSON.stringify(tokenData));
      return res.status(200).json({ success: true });
    }

    // Step 2: Create the Lead in Zoho CRM
    const nameParts = (name || '').trim().split(' ');
    const firstName = nameParts.length > 1 ? nameParts.slice(0, -1).join(' ') : '';
    const lastName = nameParts.length > 0 ? nameParts[nameParts.length - 1] : email.split('@')[0];

    const leadResp = await fetch('https://www.zohoapis.in/crm/v2/Leads', {
      method: 'POST',
      headers: {
        'Authorization': `Zoho-oauthtoken ${tokenData.access_token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        data: [{
          First_Name: firstName,
          Last_Name: lastName,
          Email: email,
          Lead_Source: 'Mokshapatra Landing Page',
          Description: 'Signed up via mokshapatra.com - founding member'
        }]
      })
    });

    const leadData = await leadResp.json();

    if (leadData.data && leadData.data[0]?.status === 'success') {
      console.log('Lead created:', leadData.data[0].details?.id);
    } else {
      console.error('Zoho lead error:', JSON.stringify(leadData));
    }

    return res.status(200).json({ success: true });

  } catch (error) {
    console.error('submit-lead error:', error.message);
    return res.status(200).json({ success: true });
  }
}
